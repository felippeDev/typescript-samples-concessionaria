"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (object) {
        console.log('inserir');
        return true;
    };
    Dao.prototype.atualizar = function () {
        console.log('atualizar');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('remover');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('selecionar');
        return Object();
    };
    Dao.prototype.selectionarTodos = function () {
        console.log('selecionar tudo');
        return Array();
    };
    return Dao;
}());
exports.default = Dao;
