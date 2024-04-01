/**
 * Estima a vazão mássica
 * @param {*} d1 Diâmetro da seção 1
 * @param {*} d2 Diâmetro da seção 2
 * @param {*} ro Densidade do flúido
 * @param {*} p1 Pressão na seção 1
 * @param {*} p2 Pressão na seção 2
 * @returns Vazão mássica
 */
function estimate(d1, d2, ro, p1, p2){
   if (d1 <= 0 || d2 <= 0 || ro <= 0 || p1 <= 0 || p2 <= 0) {
      if (d1 === 0 && d2 === 0 && ro === 0 && p1 === 0 && p2 === 0) {
         return NaN; // Todos os parâmetros são zero, retorna NaN
     } else {
         return 0; // Qualquer outro caso de entrada inválida, retorna 0
     }
 }
   
   const term1 = Math.pow(d2 / d1, 4);
   const term2 = 1 - term1;
   const term3 = Math.sqrt(term2);
   const term4 = Math.sqrt(2 * ro * (p1 - p2));
   const qm = (1 / term3) * (Math.PI * Math.pow(d2, 2) / 4) * term4;
   
   return qm;
}

module.exports = estimate;

