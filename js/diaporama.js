/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
	function Diaporama(id_diapo) {
		var img_size = 200;
		this.nb_diapo = $("#" + id_diapo + " ul li").size();
		var margin = 0;
		var marginmax = img_size * this.nb_diapo;
		$("#diapo_gauche").click(function() {
			margin = margin + img_size;
			if (margin > 0) {
				margin = 0;
			}
			$("#liste_actualite").css("margin-left", margin + "px");
		});
		$("#diapo_droite").click(function() {
			margin = margin - img_size;
			if (margin === -marginmax) {
				margin = -marginmax + img_size;
			}

			$("#liste_actualite").css("margin-left", margin + "px");
		});
	}

	var d1 = new Diaporama("diapo");

});