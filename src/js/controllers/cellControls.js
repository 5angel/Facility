export default class CellControls {
    init() {
        this.directions = ['up', 'right', 'down', 'left'];
    }

    isAllowed(direction = 0) {
        let cell = this.item.cell;

        switch(direction) {
            default: return cell.y > 0;
            case 1: return cell.x + cell.width < this.parent.width;
            case 2: return cell.y + cell.height < this.parent.height;
            case 3: return cell.x > 0;
        }

    }

    mergeTo(direction = 0) {
        let cell = this.item.cell;

        switch(direction) {
            default:
                let right = this.parent.getCell(cell.x + cell.width, cell.y);

                right.width = 0;
                right.height = 0;

                cell.width++;

                break;
        }
        
        this.parent.update();
        this.hide();
    }
}
