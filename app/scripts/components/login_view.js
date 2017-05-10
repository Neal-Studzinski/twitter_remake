import React from 'react';
import headerView from './header_view.js';


export default function loginView(store) {
    let state = store.getState();

    // Create html
    let $viewHtml = $(` <section class="page-wrapper chat-view"></section>`);
    let $contentWrapper = $(` <div class="view-content">
                                <h1>Tweeter</h1>
                                <h2>sign in</h2>
                             </div>`);
    $viewHtml.append($contentWrapper);


    let $postForm = $(`
        <div>
            <form id="login-form">
                <input class="input-email" type="text" name="email" placeholder="email…">
                <input class="input-password" type="password" name="password" placeholder="password…">
                <button class="btn btn-signin" type="submit" name="sign in button">sign in</button>
            </form>
        </div>`)

    $contentWrapper.append($postForm);

    //Add event listeners
    $postForm.find('.btn-signin').on('click', (e) => {
        e.preventDefault();
        store.dispatch({
            type: 'SIGNIN',
            login : $postForm.find('.input-email').val(),
            password : $postForm.find('.input-password').val()
        });
    });

    // return html of view
    return $viewHtml;
  }
