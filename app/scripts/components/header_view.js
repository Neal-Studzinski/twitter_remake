export default function headerView(store) {
    let state = store.getState();

    //Create the HTML
    let $html = $(` <header class="app-header">
                        <h1 class="app-logo">Tweeter</h1>
                        <div class="user">
                            <span class="display-name">${state.session.user.displayName}</span>
                            <div class="nav-avatar"><img src="${state.session.user.avatar}"></div>
                        </div>
                        <nav class="main-nav"></nav>
                    </header>`);

  //Assign any event listeners
  $($html).find('h2').on('click', () => {
      store.dispatch(exampledsAsyncAction());
    });

  // return html of view
  return $html;
}
