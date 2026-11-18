const cobra = 
{
    cor:"green",
    tamanho:10,
    direcao:"direita",
    x:400,
    y:260,
    vida:3,
    desenhar()
    {
        canvasCtx.fillStyle=this.cor;
        canvasCtx.fillRect(this.x,this.y,this.tamanho,this.tamanho);
    },
    mover(){
        
        if (this.direcao == 'direita') this.x++;
        if (this.direcao == 'esquerda') this.x--;
        if (this.direcao == 'cima') this.y--;
        if (this.direcao == 'baixo') this.y++;
        
        //A Cobra morre quando bate nos limites da tela
        if (this.x < 0) this.morrer();
        if (this.x > 800 - this.tamanho) this.morrer();
        if (this.y < 60) this.morrer();
        if (this.y > 460 - this.tamanho) this.morrer();
    },
    morrer(){
        this.vida--;
        this.x=400;
        this.y=260;
        if (this.vida == 2) this.cor = "orange"
        if (this.vida == 1) this.cor = "red";
    }
}