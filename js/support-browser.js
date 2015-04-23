/**
 * Created by Shnur on 17.04.2015.
 * https://github.com/alexshnur/support-browser
 */
(function () {
	var lang = {
		ru: {
			firstText: 'Вы используете устаревший браузер',
			secondText: 'В целях безопасности и для более удобной работы с сайтом обновите Ваш браузер на более современный.'
		},
		ua: {
			firstText: 'Ви використовуєте застарілий браузер',
			secondText: 'В цілях безпеки та для більш зручної роботи з сайтом поновіть Ваш браузер на більш сучасний.'
		},
		en: {
			firstText: 'You are using an outdated browser',
			secondText: 'For safety and for more convenient work with the site update your browser to a more modern.'
		}
	};

	var langUrls = {
		ru: {
			ie: 'http://windows.microsoft.com/ru-ru/internet-explorer/download-ie',
			safari: 'https://www.apple.com/ru/safari/',
			uc: 'http://ru.ucweb.com/ucbrowser/download/',
			firefox: 'http://www.mozilla.org/ru/firefox/fx/',
			opera: 'http://www.opera.com/ru',
			chrome: 'https://www.google.ru/chrome/'
		},
		ua: {
			ie: 'http://windows.microsoft.com/uk-ua/internet-explorer/download-ie',
			safari: 'https://www.apple.com/ru/safari/',
			uc: 'http://ru.ucweb.com/ucbrowser/download/',
			firefox: 'http://www.mozilla.org/uk/firefox/fx/',
			opera: 'http://www.opera.com/uk',
			chrome: 'https://www.google.com.ua/chrome/'
		},
		en: {
			ie: 'http://windows.microsoft.com/en-us/internet-explorer/download-ie',
			safari: 'https://www.apple.com/safari/',
			uc: 'http://www.ucweb.com/ucbrowser/download/',
			firefox: 'http://www.mozilla.org/en/firefox/fx/',
			opera: 'http://www.opera.com/',
			chrome: 'https://www.google.com/chrome/'
		}
	};

	var html = function(language) {
		return '<div class="sb-browser"><div style="width: 700px; margin: 0 auto; text-align: left; padding: 0; overflow: hidden;"><div style="width: 490px;"><div class="sb-title">' + lang[language].firstText + '</div><div class="sb-text">' + lang[language].secondText + '</div></div><ul class="sb-ul"><li><a href="' + langUrls[language].ie + '" target="_blank"><img src="images/browser/ie9-10_64x64.png" width="64" height="64" title="Internet Explorer" /></a></li><li><a href="http://www.midori-browser.org/download/" target="_blank"><img src="images/browser/midori_64x64.png" width="64" height="64" title="Midori" /></a></li><li><a href="http://browser.yandex.ru/" target="_blank"><img src="images/browser/yandex_64x64.png" width="64" height="64" title="Yandex Browser" /></a></li><li><a href="' + langUrls[language].safari + '" target="_blank"><img src="images/browser/safari_64x64.png" width="64" height="64" title="Safari" /></a></li><li><a href="' + langUrls[language].opera + '" target="_blank"><img src="images/browser/opera_64x64.png" width="64" height="64" title="Opera" /></a></li><li><a href="' + langUrls[language].chrome + '" target="_blank"><img src="images/browser/chrome_64x64.png" width="64" height="64" title="Google Chrome" /></a></li><li><a href="' + langUrls[language].firefox + '" target="_blank"><img src="images/browser/firefox_64x64.png" width="64" height="64" title="Mozilla Firefox" /></a></li><li><a href="' + langUrls[language].uc + '" target="_blank"><img src="images/browser/uc_browser_72x72.png" width="64" height="64" title="UC Browser" /></a></li></ul></div></div>';
	};

	window.supportBrowser = function (parametrs) {
		var ua = navigator.userAgent, tem, sb, isDetect = false,
			M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

		if (/trident/i.test(M[1])) {
			tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
			sb = {
				browser: 'ie',
				version: tem[1] || ''
			};
			isDetect = true;
		}
		if (M[1] === 'Chrome') {
			tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
			if (tem != null) {
				sb = {
					browser: 'opera',
					version: tem[1]
				};
				isDetect = true;
			}
		}
		M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
		if ((tem = ua.match(/version\/(\d+)/i)) != null) {
			M.splice(1, 1, tem[1]);
			sb = {
				browser: M[0].toLowerCase(),
				version: M[1]
			};
			isDetect = true;
		}
		if (!isDetect) {
			sb = {
				browser: M[0].toLowerCase(),
				version: M[1]
			};
		}
		for (var i in parametrs.browsers) {
			var browser = parametrs.browsers[i];
			if (browser.browser === sb.browser && sb.version <= browser.version) {
				document.getElementsByTagName('html')[0].className += ' bad-browser';
				document.body.insertAdjacentHTML('beforeend', html(parametrs.language));
			}
		}
	};
})();
