#!/bin/bash

COMPONENT_PATH=$1
COMPONENT_NAME_PASCAL=$2
COMPONENT_NAME_KEBAB=$3
echo "$COMPONENT_PATH"

data=$(<$COMPONENT_PATH)
data=$"import type { FunctionComponent } from 'preact';
import register from 'preact-custom-element';
${data/React.VFC/"FunctionComponent"}

register($COMPONENT_NAME_PASCAL, 'p-$COMPONENT_NAME_KEBAB', [''])"

echo "$data" > "$COMPONENT_PATH"