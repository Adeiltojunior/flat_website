import os

image_dir = 'images'

image_files = [
    'WhatsAppImage2025-06-26at18.15.33.jpeg',
    'WhatsAppImage2025-06-26at18.15.33(1).jpeg',
    'WhatsAppImage2025-06-26at18.15.34(2).jpeg',
    'WhatsAppImage2025-06-26at18.15.34(3).jpeg',
    'WhatsAppImage2025-06-26at18.15.34(4).jpeg',
    'WhatsAppImage2025-06-26at18.15.34(5).jpeg',
    'WhatsAppImage2025-06-26at18.15.34(6).jpeg',
    'WhatsAppImage2025-06-26at18.15.34.jpeg',
    'WhatsAppImage2025-06-26at18.15.35(1).jpeg',
    'WhatsAppImage2025-06-26at18.15.35(2).jpeg',
    'WhatsAppImage2025-06-26at18.15.35(3).jpeg',
    'WhatsAppImage2025-06-26at18.15.35(4).jpeg',
    'WhatsAppImage2025-06-26at18.15.35(5).jpeg',
    'WhatsAppImage2025-06-26at18.15.35.jpeg'
]

new_names = [
    'bathroom_1.jpeg',
    'bathroom_2.jpeg',
    'living_room_1.jpeg',
    'kitchen_1.jpeg',
    'pool_area_1.jpeg',
    'pool_area_2.jpeg',
    'balcony_1.jpeg',
    'living_room_2.jpeg',
    'living_room_3.jpeg',
    'bedroom_1.jpeg',
    'bedroom_2.jpeg',
    'living_room_4.jpeg',
    'key_card.jpeg',
    'balcony_2.jpeg'
]

for old_name, new_name in zip(image_files, new_names):
    old_path = os.path.join(image_dir, old_name)
    new_path = os.path.join(image_dir, new_name)
    if os.path.exists(old_path):
        os.rename(old_path, new_path)
        print(f'Renamed {old_path} to {new_path}')
    else:
        print(f'File not found: {old_path}')


