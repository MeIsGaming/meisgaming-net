# Server Setup (Hetzner 78.46.91.137)

## 1 — Install Node.js on the server

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
```

## 2 — Clone the repo

```bash
sudo mkdir -p /var/www/meisgaming
sudo chown $USER:$USER /var/www/meisgaming
git clone https://github.com/MeIsGaming/meisgaming-net.git /var/www/meisgaming
cd /var/www/meisgaming
npm ci
npm run build
```

## 3 — Apache vhost

```bash
sudo cp /var/www/meisgaming/deploy/apache-meisgaming.conf /etc/apache2/sites-available/meisgaming.conf
sudo a2ensite meisgaming
sudo a2enmod rewrite
sudo systemctl reload apache2
```

## 4 — Webhook receiver (via pm2)

```bash
sudo npm install -g pm2
cd /var/www/meisgaming
WEBHOOK_SECRET=your_secret_here pm2 start deploy/webhook.js --name meisgaming-webhook
pm2 save
pm2 startup   # follow the printed command to make it survive reboots
```

Open the firewall port (if using ufw):
```bash
sudo ufw allow 9000/tcp
```

## 5 — GitHub Webhook

In your repo → Settings → Webhooks → Add webhook:
- Payload URL: `http://78.46.91.137:9000/hook`
- Content type: `application/json`
- Secret: same value as `WEBHOOK_SECRET` above
- Events: **Just the push event**

Push to `main` → webhook triggers → server pulls + rebuilds automatically.

## 6 — Strato DNS (A-Record)

In Strato domain admin for `meisgaming.net`:
- Delete any existing A record for `@` / root
- Add: Type `A`, Host `@`, Value `78.46.91.137`, TTL 3600
- Add: Type `A`, Host `www`, Value `78.46.91.137`, TTL 3600

Propagation takes up to a few hours. Test with:
```bash
dig meisgaming.net A
```

## 7 — HTTPS (optional but recommended)

```bash
sudo apt install -y certbot python3-certbot-apache
sudo certbot --apache -d meisgaming.net -d www.meisgaming.net
```
Certbot auto-renews via systemd timer.
