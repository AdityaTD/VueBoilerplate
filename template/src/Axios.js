import Vue from "vue";
import request from "axios";

Object.defineProperty(Vue, "$http", {
	get () {
		return request;
	}
});
Object.defineProperty(Vue.prototype, "$http", {
	get () {
		return request;
	}
});
