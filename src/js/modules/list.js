/*
1 - list name
2 - id (list-name + i)
3 - value
*/

let ListItemDefault = `<p class='list__item'><input type='radio' name='1' id='2' value='3'><label for='2'>3</label></p>`;

export function listContent(list_name, list_array) {
    let ListItems = ``;
    let ListItem = ``;

    for (let i = 0; i < list_array.length; i++) {
        ListItem = ListItemDefault;
        let ListValues = Array(`${list_name}`, `${list_name}_${i}`, `${list_array[i]}`);

        for (let j = 1; j <= 3; j++) {
            ListItem = ListItem.replaceAll(`${j}`, `${ListValues[j - 1]}`);
            console.log(`${ListValues[j - 1]}`);
        }

        ListItems += ListItem;
    }

    return ListItems;
}