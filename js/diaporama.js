/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
	function Diaporama(id_diapo, imga_size) {
		var img_size = imga_size;
		this.nb_diapo = $("#" + id_diapo + " ul li").size();
		var margin = 0;
		var marginmax = img_size * this.nb_diapo;
		$("#fleche_gauche").click(function() {
			margin = margin + img_size;
			if (margin > 0) {
				margin = 0;
			}
			changeDiapo();
		});
		$("#fleche_droite").click(function() {
			margin = margin - img_size;
			if (margin === -marginmax) {
				margin = -marginmax + img_size;
			}
			changeDiapo();
		});

		function changeDiapo() {
			$("#liste_actualite").animate({left: margin + 'px'}, 500);
		}
	}

	var d1 = new Diaporama("diapo", 200);

});