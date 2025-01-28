import shutil
import os

# Specify the source file and the directory to store the copies
source_file = 'G:/Development/CW_Website/sounds/JR_SH.mp3'  # Change this to your file path
destination_dir = 'G:/Development/CW_Website/sounds/20000_sound_files/'  # Change this to your directory

# Ensure the destination directory exists
os.makedirs(destination_dir, exist_ok=True)

# Loop to create 100 copies
for i in range(1, 20000):
    # Construct the new file name
    new_file_name = f'JR_Babble_{i}.mp3'
    destination_file = os.path.join(destination_dir, new_file_name)
    
    # Copy the file
    shutil.copy2(source_file, destination_file)

print("Files copied and renamed successfully.")