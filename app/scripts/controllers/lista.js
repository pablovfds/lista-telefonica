'use strict';

/**
 * @ngdoc function
 * @name listaTelefonicaApp.controller:ListaCtrl
 * @description
 * # ListaCtrl
 * Controller of the listaTelefonicaApp
 */
angular.module('listaTelefonicaApp')
    .controller('ListaCtrl', function() {

        this.app = "Lista Telefonica";

        this.contatos = [
            { nome: "Pedro", telefone: "99767888", cor: "yellow", operadora: { nome: "Oi", codigo: 14, categoria: "Celular" }, data: new Date() },
            { nome: "Ana", telefone: "99762888", cor: "blue", operadora: { nome: "Vivo", codigo: 15, categoria: "Celular" }, data: new Date() },
            { nome: "Maria", telefone: "99717888", cor: "red", operadora: { nome: "Tim", codigo: 41, categoria: "Celular" }, data: new Date() }
        ];

        this.operadoras = [
            { nome: "Oi", codigo: 14, categoria: "Celular" },
            { nome: "Vivo", codigo: 15, categoria: "Celular" },
            { nome: "Tim", codigo: 41, categoria: "Celular" },
            { nome: "GVT", codigo: 25, categoria: "Fixo" },
            { nome: "Embratel", codigo: 21, categoria: "Fixo" }
        ];

        this.adicionarContato = function(contato) {
            this.contatos.push(angular.copy(contato));
            delete this.contato;
            this.contatoForm.$setPristine();
        };

        this.removerContatos = function(contatos) {
            this.contatos = contatos.filter(function(contato) {
                if (!contato.selecionado) return contato;
            });
        };

        this.isContatoSelecionado = function(contatos) {
            return contatos.some(function(contato) {
                return contato.selecionado;
            });
        };

        this.ordenarPor = function(campo) {
            this.criterioDeOrdenacao = campo;
            this.direcaoDaOrdenacao = !this.direcaoDaOrdenacao;
            console.log(this.criterioDeOrdenacao);
        };

    });