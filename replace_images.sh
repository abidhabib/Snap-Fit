#!/bin/bash

# Move into the before-after directory
cd /home/ellio/L/SnapFit_website/public/images/before-after || exit

echo "🧹 Cleaning old images..."
rm -f accessory-before.jpg accessory-after.jpg fashion-before.jpg fashion-after.jpg home-before.jpg home-after.jpg

echo "⬇️ Downloading new images..."

# Fashion before/after
curl -L -o fashion-before.jpg https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb
curl -L -o fashion-after.jpg https://images.unsplash.com/photo-1520975928316-6fb3d3a4f06b

# Accessories before/after
curl -L -o accessory-before.jpg https://images.unsplash.com/photo-1600185365483-26d7a4cc7519
curl -L -o accessory-after.jpg https://images.unsplash.com/photo-1618354691517-3927e0e45e02

# Home goods before/after
curl -L -o home-before.jpg https://images.unsplash.com/photo-1600585154340-be6161a56a0c
curl -L -o home-after.jpg https://images.unsplash.com/photo-1600585154603-243a1f66b7c2

echo "✅ All images downloaded and replaced successfully!"

