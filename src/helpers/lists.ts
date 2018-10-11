export class Lists {
    public static groupBy(items: Array<any>, key: string): Array<any> {
        var groupedItem = items.reduce((result, item) => ({
            ...result,
            [item[key]]: [
                ...(result[item[key]] || []),
                item,
            ],
        }), {});
        var groupedList: Array<any> = [];
        groupedList.push({
            key: 'All',
            data: items
        });
        for (var item in groupedItem) {
            groupedList.push({
                key: item,
                data: groupedItem[item]
            })
        }
        return groupedList;
    }
}