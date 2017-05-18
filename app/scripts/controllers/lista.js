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

        this.contatos = [
            { nome: "Pedro", telefone: "99767888" },
            { nome: "Ana", telefone: "99767888" },
            { nome: "Maria", telefone: "99767888" }
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

    });