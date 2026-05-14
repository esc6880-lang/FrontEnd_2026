function calcular() {
            const bandeira = document.getElementById('bandeira').value;
            const valor = parseFloat(document.getElementById('valor').value);
            const parcelas = parseInt(document.getElementById('parcelas').value);

            let taxa = 0;

            switch (bandeira) {
                case 'visa':
                    taxa = 0.02; // 2% de taxa
                    break;
                case 'master':
                    taxa = 0.025; // 2.5% de taxa
                    break;
                case 'elo':
                    taxa = 0.03; // 3% de taxa
                    break;
            }

            const valorComTaxa = valor + (valor * taxa);
            const valorParcela = valorComTaxa / parcelas;

            document.getElementById('resumo').innerText = `Valor total com taxa: R$ ${valorComTaxa.toFixed(2)}\nValor de cada parcela: R$ ${valorParcela.toFixed(2)}`;
        }
        