package com.utfpr.trabalho_final.Controllers;

import org.springframework.stereotype.Controller;
 import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class indexControler{

    @GetMapping("/")
    public String inicial() {
        return "inicial";
    }

    @GetMapping("/sala")
    public String sala() {
        return "sala";
    }

    @GetMapping("/salaJantar")
    public String salaJantar() {
        return "salaJantar";
    }

    @GetMapping("/quarto")
    public String quarto() {
        return "quarto";
    }

    @GetMapping("/quartoGamer")
    public String quartoGamer() {
        return "quartoGamer";
    }

    @GetMapping("/escritorio")
    public String escritorio() {
        return "escritorio";
    }

    @GetMapping("/banheiro")
    public String banheiro() {
        return "banheiro";
    }

    @GetMapping("/quadros")
    public String quadros() {
        return "quadros";
    }

    @GetMapping("/pinturas")
    public String pinturas() {
        return "pinturas";
    }

    @GetMapping("/telas")
    public String telas() {
        return "telas";
    }

    @GetMapping("/mascaras")
    public String mascaras() {
        return "mascaras";
    }

    @GetMapping("/destaques")
    public String destaques() {
        return "destaques";
    }

    @GetMapping("/adicCarrinho")
    public String adicCarrinho() {
        return "adicCarrinho";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/cadastro")
    public String cadastro() {
        return "cadastro";
    }
    
    @GetMapping("/produto1")
    public String produto1() {
        return "produto1";
    }

    @GetMapping("/produto2")
    public String produto2() {
        return "produto2";
    }
}
