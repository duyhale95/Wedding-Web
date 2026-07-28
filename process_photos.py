import os
from PIL import Image

input_dir = r"d:\Downloads\wedding\source\11.06 A cổng VY (3104)-20260728T025037Z-1-001\11.06 A cổng VY (3104)"
output_dir = r"d:\Downloads\wedding\source\photos"

os.makedirs(output_dir, exist_ok=True)

photos = [
    os.path.join(input_dir, "AC", "AC4.jpg"),
    os.path.join(input_dir, "File", "DSC05695.jpg"),
    os.path.join(input_dir, "File", "DSC05714.jpg"),
    os.path.join(input_dir, "File", "DSC05732.jpg"),
    os.path.join(input_dir, "File", "DSC05769.jpg"),
    os.path.join(input_dir, "File", "DSC05785.jpg"),
    os.path.join(input_dir, "File", "DSC05809.jpg"),
    os.path.join(input_dir, "File", "DSC05822.jpg"),
    os.path.join(input_dir, "File", "DSC05877.jpg"),
    os.path.join(input_dir, "File", "DSC05900.jpg"),
    os.path.join(input_dir, "File", "DSC05923.jpg"),
    os.path.join(input_dir, "File", "DSC05931.jpg"),
    os.path.join(input_dir, "File", "DSC05951.jpg"),
    os.path.join(input_dir, "File", "DSC05981.jpg"),
    os.path.join(input_dir, "File", "DSC05995.jpg"),
    os.path.join(input_dir, "File", "DSC06004.jpg"),
]

def process_img(src_path, out_name, max_dim=1200, quality=85):
    if not os.path.exists(src_path):
        print(f"File not found: {src_path}")
        return
    with Image.open(src_path) as img:
        img = img.convert("RGB")
        w, h = img.size
        scale = min(max_dim / float(w), max_dim / float(h))
        if scale < 1.0:
            new_w = int(w * scale)
            new_h = int(h * scale)
            img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        out_path = os.path.join(output_dir, out_name)
        img.save(out_path, "JPEG", quality=quality, optimize=True)
        print(f"Saved: {out_name} ({img.width}x{img.height})")

for idx, p in enumerate(photos):
    fname = os.path.basename(p)
    name_no_ext = os.path.splitext(fname)[0].lower()
    process_img(p, f"{name_no_ext}.jpg", max_dim=1000, quality=82)

# Special featured photos:
# Cover background
process_img(photos[0], "cover_bg.jpg", max_dim=1200, quality=85) # AC4
# Groom / Bride portraits
process_img(os.path.join(input_dir, "File", "DSC05809.jpg"), "couple_1.jpg", max_dim=900, quality=85)
process_img(os.path.join(input_dir, "File", "DSC05714.jpg"), "couple_2.jpg", max_dim=900, quality=85)
process_img(os.path.join(input_dir, "File", "DSC05877.jpg"), "thank_bg.jpg", max_dim=1200, quality=85)

print("All photos processed successfully!")
