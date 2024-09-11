import 'overlayscrollbars/overlayscrollbars.css';
import 'styles/main/overlay-scrollbars.scss';
import {
    OverlayScrollbars,
    ScrollbarsHidingPlugin,
    SizeObserverPlugin,
    ClickScrollPlugin
} from 'overlayscrollbars';
import {TRUE} from "sass";

const selectionToolsBtns = document.querySelectorAll('#editor-selection-tools-buttons button');

const selectionToolsBtnClick = event => {
    selectionToolsBtns.forEach(btn => btn.classList.remove('bg-gradient-to-br', 'from-pizazz', 'via-flush-orange', 'to-scarlet'));
    event.target.classList.add('bg-gradient-to-br', 'from-pizazz', 'via-flush-orange', 'to-scarlet');
}

selectionToolsBtns.forEach(btn => btn.addEventListener('click', selectionToolsBtnClick));

const modesBtns = document.querySelectorAll('#editor-modes-buttons button');

const modesBtnClick = event => {
    modesBtns.forEach(btn => btn.classList.remove('!text-opacity-100', 'bg-gradient-to-br', 'from-pizazz', 'via-flush-orange', 'to-scarlet'));
    event.target.classList.add('!text-opacity-100', 'bg-gradient-to-br', 'from-pizazz', 'via-flush-orange', 'to-scarlet');
}

modesBtns.forEach(btn => btn.addEventListener('click', modesBtnClick));

const extraModesBtns = document.querySelectorAll('#editor-extra-modes-buttons button');

const extraModesBtnClick = event => {
    extraModesBtns.forEach(btn => {
        btn.classList.remove('!text-opacity-100', 'bg-gradient-to-br', 'from-pizazz', 'via-flush-orange', 'to-scarlet')
        let betaBadge = btn.querySelector('.beta-badge');
        if (betaBadge) betaBadge.classList.remove('!text-black')
        let proBadge = btn.querySelector('.pro-badge');
        if (proBadge) proBadge.classList.remove('bg-white', 'bg-opacity-20', 'bg-none')

    });
    event.target.classList.add('!text-opacity-100', 'bg-gradient-to-br', 'from-pizazz', 'via-flush-orange', 'to-scarlet');
    let betaBadge = event.target.querySelector('.beta-badge');
    if (betaBadge) betaBadge.classList.add('!text-black')
    let proBadge = event.target.querySelector('.pro-badge');
    if (proBadge) proBadge.classList.add('bg-white', 'bg-opacity-20', 'bg-none')
}

extraModesBtns.forEach(btn => btn.addEventListener('click', extraModesBtnClick));

const bodyTypeBtns = document.querySelectorAll('#editor-body-type-buttons button');

const bodyTypeBtnClick = event => {
    bodyTypeBtns.forEach(btn => btn.classList.remove('!text-opacity-100', 'bg-gradient-to-br', 'from-pizazz', 'via-flush-orange', 'to-scarlet'));
    event.target.classList.add('!text-opacity-100', 'bg-gradient-to-br', 'from-pizazz', 'via-flush-orange', 'to-scarlet');
}

bodyTypeBtns.forEach(btn => btn.addEventListener('click', bodyTypeBtnClick));

const qualityBtns = document.querySelectorAll('#editor-quality-buttons button');

const qualityBtnClick = event => {
    qualityBtns.forEach(btn => btn.classList.remove('!text-opacity-100', 'bg-gradient-to-br', 'from-pizazz', 'via-flush-orange', 'to-scarlet'));
    event.target.classList.add('!text-opacity-100', 'bg-gradient-to-br', 'from-pizazz', 'via-flush-orange', 'to-scarlet');
}

qualityBtns.forEach(btn => btn.addEventListener('click', qualityBtnClick));

const modalModesBtns = document.querySelectorAll('#editor-modal-modes-buttons button');

const modalModesBtnClick = event => {
    modalModesBtns.forEach(btn => btn.classList.remove('!text-opacity-100', 'bg-gradient-to-br', 'from-pizazz', 'via-flush-orange', 'to-scarlet'));
    event.target.classList.add('!text-opacity-100', 'bg-gradient-to-br', 'from-pizazz', 'via-flush-orange', 'to-scarlet');
}

modalModesBtns.forEach(btn => btn.addEventListener('click', modalModesBtnClick));

const modalExtraModesBtns = document.querySelectorAll('#editor-modal-extra-modes-buttons button');

const modalExtraModesBtnClick = event => {
    modalExtraModesBtns.forEach(btn => {
        btn.classList.remove('!text-opacity-100', 'bg-gradient-to-br', 'from-pizazz', 'via-flush-orange', 'to-scarlet')
        let betaBadge = btn.querySelector('.beta-badge');
        if (betaBadge) betaBadge.classList.remove('!text-black')
        let proBadge = btn.querySelector('.pro-badge');
        if (proBadge) proBadge.classList.remove('bg-white', 'bg-opacity-20', 'bg-none')

    });
    event.target.classList.add('!text-opacity-100', 'bg-gradient-to-br', 'from-pizazz', 'via-flush-orange', 'to-scarlet');
    let betaBadge = event.target.querySelector('.beta-badge');
    if (betaBadge) betaBadge.classList.add('!text-black')
    let proBadge = event.target.querySelector('.pro-badge');
    if (proBadge) proBadge.classList.add('bg-white', 'bg-opacity-20', 'bg-none')
}

modalExtraModesBtns.forEach(btn => btn.addEventListener('click', modalExtraModesBtnClick));

const modalQualityBtns = document.querySelectorAll('#editor-modal-quality-buttons button');

const modalQualityBtnClick = event => {
    modalQualityBtns.forEach(btn => btn.classList.remove('!text-opacity-100', 'bg-gradient-to-br', 'from-pizazz', 'via-flush-orange', 'to-scarlet'));
    event.target.classList.add('!text-opacity-100', 'bg-gradient-to-br', 'from-pizazz', 'via-flush-orange', 'to-scarlet');
}

modalQualityBtns.forEach(btn => btn.addEventListener('click', modalQualityBtnClick));

const modalBodyTypeBtns = document.querySelectorAll('#editor-modal-body-type-buttons button');

const modalBodyTypeBtnClick = event => {
    modalBodyTypeBtns.forEach(btn => btn.classList.remove('!text-opacity-100', 'bg-gradient-to-br', 'from-pizazz', 'via-flush-orange', 'to-scarlet'));
    event.target.classList.add('!text-opacity-100', 'bg-gradient-to-br', 'from-pizazz', 'via-flush-orange', 'to-scarlet');
}

modalBodyTypeBtns.forEach(btn => btn.addEventListener('click', modalBodyTypeBtnClick));

const editorSettings = document.querySelector('#editor-settings')
if (editorSettings && document.body.clientWidth >= 1024) {
    editorSettings.style.maxHeight = (editorSettings.getBoundingClientRect().height + 1) + 'px'

    const editorSettingsScrollbar=  OverlayScrollbars(document.querySelector('#editor-settings'), {
        overflow: {
            x: 'hidden',
        },
    });
    const { viewport } = editorSettingsScrollbar.elements();
    const { scrollLeft, scrollTop } = viewport;
    document.querySelectorAll('#editor-settings [data-toggle="collapse"]')
        .forEach(trigger => {
            trigger.addEventListener('click', () => {
                let int = setInterval(() => {
                    viewport.scrollTo({ top: viewport.scrollHeight });
                }, 10)
                setTimeout(() => {
                    clearInterval(int)
                }, 430)
            })
        })
}