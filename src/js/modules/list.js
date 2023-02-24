let ListItemDefault = Array(
    `<p class='list__item'><input type='radio' name='`,
    `' id='`,
    `' value='`,
    `'><label for='`,
    `'>`,
    `</label></p>`
);
let ListItemDefaultActive = `<p class='list__item'><input type='radio' checked name='`;

export function listContent(list_name, list_array) {
    let ListItems = ``;
    let ListItem = ``;

    for (let i = 0; i < list_array.length; i++) {
        if (i === 0) {
            ListItem = `
        ${ListItemDefaultActive}${list_name}
        ${ListItemDefault[1]}${list_name}_${i}
        ${ListItemDefault[2]}${list_array[i]}
        ${ListItemDefault[3]}${list_name}_${i}
        ${ListItemDefault[4]}${list_array[i]}
        ${ListItemDefault[5]}
        `;
        }
        else {
            ListItem = `
        ${ListItemDefault[0]}${list_name}
        ${ListItemDefault[1]}${list_name}_${i}
        ${ListItemDefault[2]}${list_array[i]}
        ${ListItemDefault[3]}${list_name}_${i}
        ${ListItemDefault[4]}${list_array[i]}
        ${ListItemDefault[5]}
        `;
        }
        ListItems += ListItem;
    }

    return ListItems;
}