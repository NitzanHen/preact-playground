
path="$PWD/dist/pcake.es.js"

data=$(<$path)
data="import './style.css'
$data"

echo "$data" > "$path"