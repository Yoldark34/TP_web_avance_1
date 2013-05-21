/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
	function Diaporama(id_diapo, imga_size) {
		this.img_size = imga_size;
		this.nb_diapo = $("#" + id_diapo + " ul li").size();
		this.state = 0;

		//Methods
		this.previousDiapo = previousDiapo;
		this.nextDiapo = nextDiapo;
	}

	function nextDiapo() {
		if (this.state > -this.nb_diapo + 1) {
			this.state--;
			$("#liste_actualite").animate({left: "-=" + this.img_size + 'px'}, 500);
		}
	}

	function previousDiapo() {
		if (this.state !== 0) {
			this.state++;
			$("#liste_actualite").animate({left: "+=" + this.img_size + 'px'}, 500);
		}
	}

	var d1 = new Diaporama("diapo", 200);
	$("#fleche_gauche").click(function() {
		d1.previousDiapo();
	});

	$("#fleche_droite").click(function() {
		d1.nextDiapo();
	});
});