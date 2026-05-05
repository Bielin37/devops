#!/bin/bash

set -e

echo "🚀 Running Terraform..."
terraform -chdir=terraform apply -auto-approve

echo "📡 Getting EC2 IP..."
IP=$(terraform -chdir=terraform output -raw public_ip)

ssh-keyscan -H $IP >> ~/.ssh/known_hosts

until ssh -i ~/.ssh/terraform_aws.pem ubuntu@$IP "echo ready" 2>/dev/null; do
  echo "Waiting for SSH..."
  sleep 5
done

echo "🔧 Running Ansible..."
ansible-playbook \
  -i "$IP," \
  ansible/playbook.yml

echo "✅ Deployment complete!"
echo "🌍 App: http://$IP"
