"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
// Construtor com classe Aluno
var Aluno = /*#__PURE__*/_createClass(function Aluno(nome, nota) {
  _classCallCheck(this, Aluno);
  this.nome = nome;
  this.nota = nota;
}); // Instâncias da classe Aluno
var alunos = [new Aluno('Valdir', 8), new Aluno('Valdecir', 5), new Aluno('Valcir', 7), new Aluno('Daicir', 3), new Aluno('Ademir', 9), new Aluno('Adair', 6), new Aluno('Jair', 5), new Aluno('Almir', 10)];

// Função para filtrar alunos com nota maior ou igual a 6
var filtrarAlunos = function filtrarAlunos(listaAlunos) {
  return listaAlunos.filter(function (_ref) {
    var nota = _ref.nota;
    return nota >= 6;
  });
};
var alunosAprovados = filtrarAlunos(alunos);

// Mostrar alunos com nota maior ou igual a 6
console.log('Os alunos com nota maior ou igual a 6 são:');
alunosAprovados.forEach(function (aluno) {
  console.log("".concat(aluno.nome, " - Nota: ").concat(aluno.nota));
});