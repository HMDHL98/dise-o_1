var app = new Vue ({
    el: '#app',
    data: {
        tecleado: '',
        operaciones: [ '+', '-', '*', '/', Math.sqrt],
        numeros: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        raiz: 0,
    },
    methods: {
        nums(val){
            this.tecleado += val;
            console.log(Number(this.tecleado))
        },
        oprs(val){
            if(val === '+'){

            }
            // }else if(val === '-'){

            // }else if(val === 'X'){

            // }else if(val === '/'){
            //     // this.div = this
            // }else
            if(val === '^(1/2)'){
                this.raiz = this.operaciones[4](Number(this.tecleado));
            }
            this.tecleado = '';
        }
    }
});

console.log(keyCode)

