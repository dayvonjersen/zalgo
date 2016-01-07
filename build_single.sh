#!/bin/bash
z=${@%.html}
./zalgo --single=$z
if [[ $? -eq 0 ]]; then
    mv tmp/$z.* dist
fi
