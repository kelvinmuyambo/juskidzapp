export class Lists {
    public static groupBy(items: Array<any>, key: string): Array<any> {
        return items.reduce((result, item) => ({
            ...result,
            [item[key]]: [
                ...(result[item[key]] || []),
                item,
            ],
        }), {});
    }
}