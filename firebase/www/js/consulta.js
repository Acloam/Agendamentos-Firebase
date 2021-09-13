var app = {

    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        app.listar();
        document.getElementById("btnSearch").addEventListener("click",app.reload);
    },

    listar: function() {
        var db = firebase.firestore();
        var collection = document.title.slice(10);
        var ag = db.collection(collection);
        var filter = document.getElementById("filter").value;
        var counter = 1;
        var a = "a"
        
        ag.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if(doc.data().nome.includes(filter)){
                    $("#tableData").append("<tr name='data'>");
                    $("#tableData").append("<td name='data' scope='col'>" + counter + "</td>");
                    $("#tableData").append("<td name='data' scope='col'>" + doc.data().nome + "</td>");
                    $("#tableData").append("<td name='data' scope='col'>" + doc.data().telefone + "</td>");
                    $("#tableData").append("<td name='data' scope='col'>" + doc.data().origem + "</td>");
                    $("#tableData").append("<td name='data' scope='col'>" + doc.data().data_contato + "</td>");
                    $("#tableData").append("<td name='data' scope='col'>" + doc.data().observacao + "</td>");
                    $("#tableData").append("</tr>");
                    counter++;
                }
            })
        })  
    },

    reload: function() {
        var oldData = document.getElementsByName("data");
        while(oldData.length > 0){
            oldData.forEach((element) => {
                element.remove(element);
            })
        }
        app.listar();
    }

}

app.initialize();