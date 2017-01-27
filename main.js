function myFunction(id){
        var elem = document.getElementById(id);
        elem.style.display = 'block';

        if(id == 'aboutMe'){
            var project = document.getElementById('project');
            var inspiration = document.getElementById('inspiration');

            project.style.display = 'none';
            inspiration.style.display = 'none';
        }
        else if(id == 'project'){
            var aboutMe = document.getElementById('aboutMe');
            var inspiration = document.getElementById('inspiration');

            aboutMe.style.display = 'none';
            inspiration.style.display = 'none';
        }
        else if(id == 'inspiration'){
            var project = document.getElementById('project');
            var aboutMe = document.getElementById('aboutMe');

            project.style.display = 'none';
            aboutMe.style.display = 'none';
            }
    }