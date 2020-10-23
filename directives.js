var directive1 = function(data, id) {
  let { Title } = data;
  let { Artist } = data;
  let { Artists } = data;
  let { Collab } = data;
  let { Country } = data;
  let { AudioUrl } = data;
  let { ImageUrl } = data;
  let { Activity: { Comment_count: comments } } = data;
  let { Activity: { Like_count: likes } } = data;
  let { Activity: { Play_count: plays } } = data;

  let template1 = `
                    
                 <div class="col s12 musiccard white relative nopadding ${id}" data-id="/${id}" data-type="normal" data-artist="${Artist}" onclick="activate(this)">
                    
                    <div class="row nopadding">
                        <div class="player white z-depth-1">
                 
                     <i class="material-icons red-text" data-audiourl="${AudioUrl}">play_arrow</i>
                 
                     </div>
                        <div class="col s6 anti-leftpadding">
                             <img src="${ImageUrl}">
                         </div>
                         
                         <div class="col s6">
                         
                         <div class="row " style="margin-bottom:0">
                         
                           <div class="col s6 nopadding">
                             <span class="time1">• 2days ago</span>
                           </div>
                           <div class="col s6 right-align">
                             
                            <a class="btn-floating z-depth-0 waves-effect waves-circle left-align transparent">
                             
                           <i class="black-text material-icons">more_horiz</i>
                             
                           </a>
                             
                           </div>
                         
                         
                             
                         </div>
                         <br/>
                         
                             <div class="detail nopadding">
                                 <span class="red-text" style="display: block; font-size: 25px;">${Title}</span>
                                 <span style="display: block">${Artist}</span>
                                 <span class="activity-stat">
                                     <i class="material-icons">favorite</i>
                                     <span>${likes}</span>
                                 </span>
                                 <span class="activity-stat">
                                     <i class="material-icons">comment</i>
                                     <span>${comments}</span>
                                 </span>
                                 <span class="activity-stat">
                                 
                                     <i class="material-icons">hearing</i>
                                     <span>${plays}</span>
                                 </span>
                             </div>
                          
                         </div>
                           
                    </div>
                    
                    <div class="row others"></div>
                    
                </div>
                <br>
                 `;

  return template1
}

let directive2 = (data, id)=>{
  
  let { Title } = data;
  let { Artist } = data;
  let { Artists } = data;
  let { Collab } = data;
  let { Country } = data;
  let { AudioUrl } = data;
  let { ImageUrl } = data;
  let { Activity: { Comment_count: comments } } = data;
  let { Activity: { Like_count: likes } } = data;
  let { Activity: { Play_count: plays } } = data;
  
  let template1 = `
                      
                   <div class="col s12 musiccard mussicard-extended white relative nopadding view ${id}" data-id="${id}" data-type="normal" data-artist="${Artist}">
                      
                      <div class="row nopadding">
                          <div class="player white z-depth-1">
                   
                       <i class="material-icons red-text" data-audiourl="${AudioUrl}">play_arrow</i>
                   
                       </div>
                          <div class="col s6 anti-leftpadding">
                               <img src="${ImageUrl}">
                           </div>
                           
                           <div class="col s6">
                           
                           <div class="row " style="margin-bottom:0">
                           
                             <div class="col s6 nopadding">
                               <span class="time1">• 2days ago</span>
                             </div>
                             <div class="col s6 right-align">
                               
                              <a class="btn-floating z-depth-0 waves-effect waves-circle left-align transparent">
                               
                             <i class="black-text material-icons">more_horiz</i>
                               
                             </a>
                               
                             </div>
                           
                           
                               
                           </div>
                           <br/>
                           
                               <div class="detail nopadding">
                                   <span class="red-text" style="display: block; font-size: 25px;">${Title}</span>
                                   <span style="display: block">${Artist}</span>
                                   <span class="activity-stat">
                                       <i class="material-icons">favorite</i>
                                       <span>${likes}</span>
                                   </span>
                                   <span class="activity-stat">
                                       <i class="material-icons">comment</i>
                                       <span>${comments}</span>
                                   </span>
                                   <span class="activity-stat">
                                   
                                       <i class="material-icons">hearing</i>
                                       <span>${plays}</span>
                                   </span>
                               </div>
                            
                           </div>
                             
                      </div>
                      
                      <div class="row others"></div>
                      
                  </div>
                  <br>
                   `;
  
  return template1;
  
}

let directive3 = (data, id)=>{
  
  let template = `
   
    <div class="comment col s12">
          <span class=" thumbnail indigo circle relative">
            <img class="hide" src="">
            <span class="white-text super-center"> MK</span>
          </span>
          <span class="comment-detail">
            <p>Mack Madoc</p>
            <span class="time pink white-text">• 3 days ago</span>
            <p class="grey-text text-darken-1 msg">My god this song too sweet</p>
          </span>
          <div class="divider-container">
            <div class="divider"></div>
          </div>
        </div>
        `;
        return template;
}

let directive4 = (data, id)=>{
  let { Title } = data;
  let { Artist } = data;
  let { Artists } = data;
  let { Collab } = data;
  let { Country } = data;
  let { AudioUrl } = data;
  let { ImageUrl } = data;
  let { Activity: { Comment_count: comments } } = data;
  let { Activity: { Like_count: likes } } = data;
  let { Activity: { Play_count: plays } } = data;
  let template =`
   
    <div class="grey lighten-3 view ${id}">
      <div class="row">
        <div class="row">
          <div class="col s6 ">
            <a class="btn-floating waves-effect waves-circle transparent z-depth-0 ">
              <i class="material-icons white-text">arrow_back</i>
            </a>
          </div>
          <div class="col s6 right-align">
            <a class="btn-floating waves-effect waves-circle transparent z-depth-0 share">
              <i class="material-icons white-text text-z-depth-3">share</i>
            </a>
            <a class="btn-floating waves-effect waves-circle transparent z-depth-0">
              <i class="material-icons white-text">notifications</i>
            </a>
          </div>
        </div>
      </div>
      <div class="row download-card white z-depth-2">
        <div class="col s12">
          <div class="row">
            <!-- dwn image column -->
            <div class="col s5">
              <Img src="${ImageUrl}">
            </div>
            <div class="col s7">
              <p class="song-title">${Title} </p>
              <p class="song-artist"><a>${Artist}</a></h3>
                <div class="divider"></div>
                <br>
                <div class="row">
                  <div class="col s4 center-align activity-detail">
                    <i class="material-icons hide">
                      play
                    </i>
                    <span>${likes}</span>
                    <p>Likes</p>
                  </div>
                  <div class="col s4 center-align activity-detail">
                    <i class="material-icons hide">
                      favorite
                    </i>
                    <span>${comments}</span>
                    <p>Comments</p>
                  </div>
                  <div class="col s4 center-align activity-detail">
                    <i class="material-icons hide">
                      favorite
                    </i>
                    <span>${plays}</span>
                    <p>Played</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div class="col s12">
          <form class="hide">
            <input class="grey lighten-3 comment-box" placeholder="What are your thoughts">
          </form>
        </div>
        <div class="col s12" style="position: relative">
          <a class="btn-floating white z-depth-0 halfway-fab take-meback left">
            <i class="material-icons black-text">
              pause
            </i>
          </a>
          <a class="btn-floating grey lighten-2 halfway-fab take-meback">
            <i class="material-icons">
              favorite
            </i>
          </a>
          <a class="btn-floating blue right halfway-fab btn-touch">
            <i class="material-icons">
              file_download
            </i>
          </a>
        </div>
      </div>
      <!-- comment section-->
      <div class="comment-section nomargin">
        <br />
        <!-- comment box-->
        <form class="comment-box relative">
          <div class="white fake-input z-depth-1 grey-text l" placeholder="leave a comment" contenteditable>what do you think?</div>
          <textarea class="input z-depth-1 white grey-text darken-1 nomargin" placeholder="leave your thoughts"></textarea>
          <span class="comment-icon pink hide">
            <i class="material-icons white-text">comment</i>
            <span class="vert-divider"></span>
          </span>
        </form>
        <br />
       </div>
       
       <div class="others"></div>
       <div class="comments"></div>
     </div>
  `;
  return template;
}