function getVariables() {
    getstart = document.getElementById("start");
    start = getstart.options[getstart.selectedIndex].value;
    getdestination = document.getElementById("destination");
    destination = getdestination.options[getdestination.selectedIndex].value;
  }

  function defineRoutes() {
    routesArray = ["Gpo", "Prestige", "Junction", "Lenana", "Karen", "Ngong"];
  }
  
  $(document).ready(function() {
    getVariables();
    defineRoutes();
    $("#button").click(function() {
        descriptionObject = {
            aa : ['Already at destination "NO-COST"'],
            ab : ['At the GPO bus stop board citi-hoppa 4w, on site of CTM ngong road on right and Uchumi supermarket on your left know that you are five minutes away from destination. On arival you should see Prestige shopping mall on your left."COST-KSH50"'],
            ac : ['At the GPO bus stop board citi-hoppa 4w, on site of Green House Mall on left know that you are eleven minutes away from destination. On arivAtal you should see Junction mall on your right."COST-KSH50"'],
            ad : ['the GPO bus stop board citi-hoppa 4w, on site of Junction mall on your right know that you are  ten minutes away from destination. On arival you should see Prestige shopping mall on your left."COST-KSH50"'],
            ae : ['AT the GPO bus stop board citi-hoppa 4w, on site of Junction mall on your right know that you are  twenty four minutes away from destination. On arival you should see shell pertol station on your left."COST-70"'],
            af : ['At the GPO bus stop board citi-hoppa 4w, on site of Junction mall on your right know that you are  thirty minutes away from destination. On arival you should see Milele mall on your left."COST-100"'],
            ba : ['At the Prestige bus stop board citi-hoppa 4w, on site of Citam valley road know that you are five minutes away. On arrival you should see the Posta on your right."COST-20"'],
            bb : ['Already at destination."NO-COST"'],
            bC : ['At the Prestige bus stop board citi-hoppa 4w, on site of Greenhouse mall on your left know that you are  five minutes away from destination. On arival you should see Junction shopping mall on your right."COST-20"'],
            bd: ['At the Prestige bus stop board citi-hoppa 4w, on site of Junction mall on your right know that you are  ten minutes away from destination. On arival you should see lenana school on your left."COST-40"'],
            be : ['At the Prestige bus stop board citi-hoppa 4w, on site of Junction mall on your right know that you are  ten minutes away from destination. On arival you should see shell petro station on your left."COST-50"'],
            bf : ['At the Prestige bus stop board citi-hoppa 4w, on site of Junction mall on your right know that you are  twenty minutes away from destination. On arival you should see Milele shopping mall on your left."COST-100"'],
            ca : ['AT the junction bus stop board citi-hoppa 4w, on site of Citam valley road on your left know that you are  five minutes away from destination. On arival you should see Posta building on your right."COST-100"'],
            cb : ['At the Junction bus stop board citi-hoppa 4w, on site of Greenspan mall on your left know that you are  two minutes away from destination. On arival you should see Prestige shopping mall on your left."COST-80"'],
            cc : ['Already at destination,"NO-COST"'],
            cd : ['At the Junction bus stop board citi-hoppa 4w. On arival you should see Prestige shopping mall on your left. "COST-60"'],
            ce : ['At the Junction bus stop board citi-hoppa 4w. On arival you should shell petro station on your left. "COST-60"'],
            cf : ['At the Juncion bus stop board citi-hoppa 4w. On arival you should see Prestige shopping mall on your left. "COST-80"'],
            da : ['At the Lenana bus stop board citi-hoppa 4w, on site of Citam valley road on your left know that you are  five minutes away from destination. On arival you should see Posta building on your left. "COST-80"'],
            db : ['At the Lenana bus stop board citi-hoppa 4w, on site of Green house mall on your right know that you are  three minutes away from destination. On arival you should see Prestige shopping mall on your right. "COST-50"'],
            dc : ['At the Lenana bus stop board citi-hoppa 4w. On arival you should see Junction shopping mall on your Right. "COST-50"'],
            dd : ['Already at destination. "NO COST"'],
            de : ['At the Lenana bus stop board citi-hoppa 4w. On arival you should see shell petro station on your left. "COST-20"'],
            df : ['At the Lenana bus stop board citi-hoppa 4w. On arival you should see Milele shopping mall on your left. "COST-50"'],
            ea : ['At the Karen bus stop board citi-hoppa 4w, on site of Citam valley road on your left know that you are  five minutes away from destination. On arival you should see Posta building on your right. "COST-80"'],
            eb :['At the Karen bus stop board citi-hoppa 4w, on site of Greenhouse mall on your Right know that you are  three minutes away from destination. On arival you should see Prestige shopping mall on your right. "COST-50"'],
            ec : ['At the karen bus stop board citi-hoppa 4w. On arival you should see Junction mall  on your left. "COST-40"'],
            ed : ['At the Karen bus stop board citi-hoppa 4w. On arival you should lenana on your left. "COST-20"'],
            ee : ['Already at destination. "NO COST"'],
            ef : ['At the Karen bus stop board citi-hoppa 4w. On arival you should see Milele shopping mall on your left. "COST-50"'],
            fa : ['At the Ngong bus stop board citi-hoppa 4w. on site of Citam valley road know you are five miutes away.on arrival you should see Posta building. "COST-100"'],
            fb : ['At the Ngong bus stop board citi-hoppa 4w. on site of Green house mall know you are Three miutes away.on arrival you should see Green house shopping mall. "COST-80"'],
            fc : ['At the Ngong bus stop board citi-hoppa 4w. on site of Green house mall know you are Three miutes away.on arrival you should see Junction shopping mall. "COST-50"'],
            fd : ['At the Ngong bus stop board citi-hoppa 4w. on site of Junction mall know you are Three miutes away.on arrival you should see Green lenana ."COST-40"'],
            fe : ['At the Ngong bus stop board citi-hoppa 4w. on arrivall you should see the shell petro station."COST-20"'],
            ff : ['Already at destination."NO COST'],
        locations = (start+destination);
        alert(descriptionObject[locations][0]);
    });
  });