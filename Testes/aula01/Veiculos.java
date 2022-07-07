package aula01;

public class Veiculos {
    private int passageiros;
    private int combustivel;
    private int consumo;
    
    public Veiculos (int pass, int comb, int cons){
        this.passageiros = pass;
        this.combustivel = comb;
        this.consumo = cons;
    }
    
    public int calcular_consumo(){
        return (this.combustivel*this.consumo);
    }
    
    public int get_passageiros(){
        return this.passageiros;
    }
    
}

