<facility class="facility">
    <cell-controls name="controls" class="cell-controls"></cell-controls>
    <table class="facility__outer">
        <tbody class="facility__inner">
            <tr class="facility__roof">
                <th class="cell cell_type_stairs"></th>
                <th class="cell" each="{ repeat(width) }"></th>
            </tr>
            <tr class="facility__floor" each="{ floor in table }">
                <td class="cell cell_type_stairs"></td>
                <td class="cell"
                    colspan="{ cell.width }" rowspan="{ cell.height }"
                    if="{ cell.width && cell.height }"
                    each="{ cell in floor }"
                    onmousedown="{ parent.parent.tags.controls.show }">

                </td>
            </tr>
        </tbody>
    </table>
    <script>
        this.mixin('facility');
    </script>
</facility>
