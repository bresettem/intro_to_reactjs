#!/bin/bash

# This interactive Bash script streamlines the setup of a React project with the following features:
# - Validates and normalizes the provided directory name, enforcing naming conventions and length restrictions
# - Handles an interactive prompt for the directory name if none is provided
# - Creates 'public' and 'src/components' directories for project structure
# - Generates 'index.html', 'styles.css', 'App.jsx', and 'index.js' files to initiate project files
# - Sets up a basic React project with a dynamic HTML title in 'public/index.html'
# - Creates a 'package.json' file with predefined dependencies and scripts
# - Navigates to the created directory and installs project dependencies using npm
#
# Execution on Linux:
# 1. Save the script into a file (e.g., 'create-react-project.sh').
# 2. Make the script executable: 'chmod +x create-react-project.sh'.
# 3. Run the script without arguments: './create-react-project.sh'.
#    Alternatively, provide a directory name as an argument: './create-react-project.sh "my_project"'.
# Note: Ensure proper permissions and have Node.js/npm installed for execution.


# Configuration
MAX_NAME_LENGTH=214
SCRIPT_NAME=$(basename "$0")

# Log function
log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Error function
error() {
  echo "Error: $1" >&2
  exit 1
}

# Validate directory name length and characters
normalize_and_validate_directory_name() {
  local name="$1"
  local normalized_directory_name

  # Remove trailing slashes
  name=$(echo "$name" | sed 's#/$##')

  # Remove non-printable ASCII characters
  name=$(echo "$name" | tr -cd '[:print:]')

  # Allow upper and lower case, dashes, underscores, numbers, spaces, and colon
  normalized_directory_name=$(echo "$name" | tr -c '[:alnum:]_ :-' '-' | tr -s '-')

  # Ensure the name length is within limits
  if [ ${#normalized_directory_name} -gt $MAX_NAME_LENGTH ]; then
    error "The name exceeds the maximum length of $MAX_NAME_LENGTH characters."
  fi

  # Remove trailing special characters and dots
  normalized_directory_name=$(echo "$normalized_directory_name" | sed 's/[^a-zA-Z0-9]*$//')

  echo "$normalized_directory_name"
}

# Validate project name length and characters
normalize_and_validate_project_name() {
  local name="$1"
  local normalized_project_name

  # Remove non-printable ASCII characters
  name=$(echo "$name" | tr -cd '[:print:]')

  # Convert to lowercase and replace spaces and underscores with hyphens
  normalized_project_name=$(echo "$name" | tr '[:upper:]' '[:lower:]' | sed 's/[ _]/-/g')

  # Replace non-url-safe characters with hyphen
  normalized_project_name=$(echo "$normalized_project_name" | tr -c '[:alnum:]' '-' | tr -s '-')

  # Ensure the name length is within limits
  if [ ${#normalized_project_name} -gt $MAX_NAME_LENGTH ]; then
    error "The normalized project name exceeds the maximum length of $MAX_NAME_LENGTH characters."
  fi

  # Remove trailing special characters and dots
  normalized_project_name=$(echo "$normalized_project_name" | sed 's/[^a-zA-Z0-9\.]$//')

  echo "$normalized_project_name"
}

# Create directory structure and files
create_project() {
  local project_dir="$1"
  local normalized_directory_name

  # Create the project directory
  mkdir -p "$project_dir/public" "$project_dir/src/components"
  log "Created project directory: $project_dir"

  # Create files
  touch "$project_dir/public/index.html" "$project_dir/public/styles.css" "$project_dir/src/index.js" "$project_dir/src/components/App.jsx"
  log "Created necessary files in $project_dir"

  # Create public/index.html with dynamic title
  cat <<EOF > "$project_dir/public/index.html"
<!DOCTYPE html>
<html lang="en">

<head>
  <title>$project_dir</title>
  <link rel="stylesheet" href="styles.css" />
</head>

<body>
  <div id="root"></div>
  <script src="../src/index.js" type="text/jsx"></script>
</body>

</html>
EOF
  log "Created public/index.html with dynamic title"

  # Create src/components/App.jsx
  cat <<EOF > "$project_dir/src/components/App.jsx"
import React from "react";

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}
export default App;
EOF
  log "Created src/components/App.jsx"

  # Create src/index.js
  cat <<EOF > "$project_dir/src/index.js"
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
EOF
  log "Created src/index.js"

  # Create package.json
  cat <<EOF > "$project_dir/package.json"
{
  "name": "${normalized_project_name}",
  "version": "1.0.0",
  "description": "",
  "keywords": [],
  "main": "src/index.js",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "devDependencies": {
    "typescript": "^4.9.5"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
}
EOF
  log "Created package.json"

  echo "React project created successfully in directory: $project_dir"
}

# Install dependencies
install_dependencies() {
  local project_dir="$1"

  cd "$project_dir" || error "Unable to change to directory $project_dir"
  npm i || error "Failed to install npm dependencies."
  log "Installed npm dependencies"
}

# Main execution

# Check if directory name provided
if [ -z "$1" ]; then
  read -p "Please provide a directory name: " directory_name
else
  directory_name="$1"
fi

# Validate and normalize directory name
normalized_directory_name=$(normalize_and_validate_directory_name "$directory_name") || exit 1

# Validate and normalize project name
normalized_project_name=$(normalize_and_validate_project_name "$normalized_directory_name") || exit 1

echo -e "\n🚀 Creating a new React project..."
echo -e "Directory Name: $normalized_directory_name"
echo -e "Project Name  : $normalized_project_name\n"

# Confirm before proceeding
read -p "Do you want to continue? (y/n): " -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "Aborted by user."
  exit 0
fi

# Create project structure and files
create_project "$normalized_directory_name" || exit 1

# Install dependencies
install_dependencies "$normalized_directory_name" || exit 1

log "React project created successfully in directory: $normalized_directory_name"
