import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

export default class InterestForm extends Component {

    sendEmail(e) {
        e.preventDefault();

        axios.post('/contactus', {
            name: this.refs.name.value.trim(),
            email: this.refs.email.value.trim(),
            date: this.refs.date.value.trim(),
            phone: this.refs.phone.value.trim(),
            numPlayers: this.refs.numPlayers.value.trim(),
            comments: this.refs.comments.value.trim()
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        this.refs.name.value = '';
        this.refs.email.value = '';
        this.refs.date.value = '';
        this.refs.phone.value = '';
        this.refs.phone.value = '';
        this.refs.numPlayers.value = '';
        this.refs.comments = '';
    }

    render() {
        return <form onSubmit={this.sendEmail.bind(this)}>
            <input type="text"  ref="name" placeholder="Имя и Фамилия" />
            <input type="tel"  ref="phone" placeholder="Номер Tелефона" />
            <input type="email"  ref="email" placeholder="Адрес Электронной Почты"/>
            <input type="date"  ref="date" placeholder="Дата Мероприятия"/>
            <input type="num"  ref="numPlayers" placeholder="Количество Игроков"/>
            <textarea ref="comments" placeholder="Комментарии"></textarea>
            <button><i className="fa fa-envelope"></i> Отправить</button>
        </form>
    }
}
