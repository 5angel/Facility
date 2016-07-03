export default class Facility {
    init() {
        this.width = Facility.WIDTH_DEFAULT;
        this.height = Facility.HEIGHT_DEFAULT;

        this.table = this._fillCells();
    }

    getCell(x = 0, y = 0) {
        return this.table[y][x];
    }

    _fillCells() {
        let table = [];

        for (let y = 0; y < this.height; ++y) {
            let floor = [];

            for (let x = 0; x < this.width; ++x) {
                floor.push({
                    x, y,
                    width: 1,
                    height: 1
                });
            }

            table.push(floor);
        }

        return table;
    }

    repeat(times) {
        return new Array(times);
    }
}

Facility.WIDTH_DEFAULT = 4;
Facility.HEIGHT_DEFAULT = 2;
