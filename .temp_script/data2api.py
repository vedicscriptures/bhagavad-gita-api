import os
import json
from pathlib import Path

source_directory = Path("../bhagavad-gita-data/slok")
target_directory = Path("./slok")

# Find all JSON files in the source directory and its subdirectories
json_files = source_directory.rglob("*.json")
for source_path in json_files:
    chapter, slok = 0, 0
    try:
        # Read the JSON content from the source file
        with open(source_path, "r", encoding="utf-8") as source_file:
            prabhu = json.load(source_file).get("prabhu", False)

        chapter = int(str(source_path.name).split(".")[0].split("_")[2])
        slok = int(str(source_path.name).split(".")[0].split("_")[4])
        target_path = Path(f"./slok/{chapter}/{slok}/index.json")

        # Create target directory if it does not exist
        os.makedirs(os.path.dirname(target_path), exist_ok=True)

        # Read the JSON content from the source file
        with open(target_path, "r", encoding="utf-8") as source_file:
            data = json.load(source_file)

        if prabhu:
            data["prabhu"] = prabhu
            # Write the JSON content to the target file
            with open(target_path, "w", encoding="utf-8") as fp:
                json.dump(
                    data,
                    fp,
                    ensure_ascii=False,
                    indent=4,
                )
                fp.write("\n")
        else:
            raise Exception("comentry not found : " + str(source_path))

    except Exception as e:
        print(chapter, slok)
        print(e)
