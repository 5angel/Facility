<cell-controls>
    <button type="button" class="cell-merge cell-merge_{ value }"
            each="{ value, i in directions }"
            if="{ isAllowed(i) }"
            onclick="{ mergeTo.bind(this, i) }"></button>
    <script>
        this.mixin('popover');
        this.mixin('cell-controls');
    </script>
</cell-controls>
