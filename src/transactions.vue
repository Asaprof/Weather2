<template>
    <div id="test">
        <div class="add">
            <input class="inp"></input>
            <div class="add-button">+</div>
        </div>
        <div class="transactions">
            <table width="100%">
                <thead>
                    <th>Transactions</th>
                </thead>
                <tbody class="transactions-data">
                    <tr v-for="value in values">
                        <th>{{ value }}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

    window.onload = function () {
        new Vue({
            el: '#app',
            data: {
                values: ['qwe', 'rty', 'uio']
            }
        })
    }
</script>


