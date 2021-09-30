var app = {

    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.getData();
        document.getElementById("btnEdit").addEventListener("click", app.edit);
    },

    edit: async function() {
        var db = firebase.firestore();
        var collection = document.title.slice(10);
        var ag = db.collection(collection).doc(localStorage.getItem('id'));

        let cnome = document.getElementById("nameInput").value;
        let ctelefone = document.getElementById("adressInput").value;
        let corigem = document.getElementById("stateInput").value;
        let cdata = document.getElementById("dateInput").value;
        let cobservacao = document.getElementById("obsInput").value;    
        
        await ag.update({
            nome: cnome,
            telefone: ctelefone,
            origem: corigem,
            data_contato: cdata,
            observacao: cobservacao
        });

        document.location = '../consulta/consulta'+collection+'.html';
    },

    getData: function() {
        var db = firebase.firestore();
        var collection = document.title.slice(10);
        var ag = db.collection(collection);
    
        ag.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if(doc.id == localStorage.getItem('id')){
                    document.getElementById("nameInput").value = doc.data().nome;
                    document.getElementById("adressInput").value = doc.data().telefone;
                    document.getElementById("stateInput").value = doc.data().origem;
                    document.getElementById("dateInput").value = doc.data().data_contato;
                    document.getElementById("obsInput").value = doc.data().observacao;  
                }
            })
        })  
    }

}

app.initialize();