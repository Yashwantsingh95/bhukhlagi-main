import React from 'react';

const PizzaPeel = ({ width = "100%", className = "" }) => {
    return (
        <svg
            width={width}
            viewBox="0 0 680 300"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <title
                style={{
                    fill: 'rgb(0, 0, 0)',
                    stroke: 'none',
                    color: 'rgb(255, 255, 255)',
                    strokeWidth: '1px',
                    strokeLinecap: 'butt',
                    strokeLinejoin: 'miter',
                    opacity: 1,
                    fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontSize: '16px',
                    fontWeight: 400,
                    textAnchor: 'start',
                    dominantBaseline: 'auto'
                }}
            >
                Pizza peel
            </title>
            <desc
                style={{
                    fill: 'rgb(0, 0, 0)',
                    stroke: 'none',
                    color: 'rgb(255, 255, 255)',
                    strokeWidth: '1px',
                    strokeLinecap: 'butt',
                    strokeLinejoin: 'miter',
                    opacity: 1,
                    fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontSize: '16px',
                    fontWeight: 400,
                    textAnchor: 'start',
                    dominantBaseline: 'auto'
                }}
            >
                A 2D illustration of a flat pizza peel with a wide rectangular blade and a long handle
                with wood grain detail
            </desc>

            <defs>
                <clipPath id="blade-clip">
                    <path d="M65,88 L312,88 L312,212 L65,212 Z" />
                </clipPath>
                <clipPath id="handle-clip">
                    <path d="M370,135 L618,135 L618,165 L370,165 Z" />
                </clipPath>
                <clipPath id="taper-clip">
                    <path d="M312,88 L372,133 L372,167 L312,212 Z" />
                </clipPath>
            </defs>

            <g
                style={{
                    fill: 'rgb(0, 0, 0)',
                    stroke: 'none',
                    color: 'rgb(255, 255, 255)',
                    strokeWidth: '1px',
                    strokeLinecap: 'butt',
                    strokeLinejoin: 'miter',
                    opacity: 1,
                    fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontSize: '16px',
                    fontWeight: 400,
                    textAnchor: 'start',
                    dominantBaseline: 'auto'
                }}
            >
                <path d="M65,88 L312,88 L372,133 L618,133 L618,167 L372,167 L312,212 L65,212 Z" fill="#C97D3A"
                    stroke="#7A4A1A" strokeWidth="2"
                    style={{
                        fill: 'rgb(201, 125, 58)',
                        stroke: 'rgb(122, 74, 26)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '2px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 1,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />

                <line x1="85" y1="88" x2="85" y2="212" stroke="#A5611E" strokeWidth="1.2" opacity="0.6"
                    clipPath="url(#blade-clip)"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(165, 97, 30)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1.2px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 0.6,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <line x1="110" y1="88" x2="110" y2="212" stroke="#A5611E" strokeWidth="1" opacity="0.5"
                    clipPath="url(#blade-clip)"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(165, 97, 30)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 0.5,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <line x1="138" y1="88" x2="138" y2="212" stroke="#B8722A" strokeWidth="1.4" opacity="0.55"
                    clipPath="url(#blade-clip)"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(184, 114, 42)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1.4px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 0.55,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <line x1="165" y1="88" x2="165" y2="212" stroke="#A5611E" strokeWidth="1" opacity="0.4"
                    clipPath="url(#blade-clip)"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(165, 97, 30)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 0.4,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <line x1="192" y1="88" x2="192" y2="212" stroke="#A5611E" strokeWidth="1.2" opacity="0.6"
                    clipPath="url(#blade-clip)"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(165, 97, 30)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1.2px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 0.6,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <line x1="220" y1="88" x2="220" y2="212" stroke="#B8722A" strokeWidth="1" opacity="0.5"
                    clipPath="url(#blade-clip)"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(184, 114, 42)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 0.5,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <line x1="248" y1="88" x2="248" y2="212" stroke="#A5611E" strokeWidth="1.3" opacity="0.55"
                    clipPath="url(#blade-clip)"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(165, 97, 30)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1.3px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 0.55,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <line x1="276" y1="88" x2="276" y2="212" stroke="#A5611E" strokeWidth="1" opacity="0.45"
                    clipPath="url(#blade-clip)"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(165, 97, 30)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 0.45,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <line x1="300" y1="88" x2="300" y2="212" stroke="#B8722A" strokeWidth="1.2" opacity="0.5"
                    clipPath="url(#blade-clip)"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(184, 114, 42)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1.2px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 0.5,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />

                <path d="M312,88 L372,133 L372,167 L312,212 Z" fill="#C97D3A" stroke="none"
                    style={{
                        fill: 'rgb(201, 125, 58)',
                        stroke: 'none',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 1,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <line x1="312" y1="88" x2="372" y2="133" stroke="#7A4A1A" strokeWidth="0" opacity="0"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(122, 74, 26)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '0px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 0,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <line x1="326" y1="100" x2="372" y2="138" stroke="#A5611E" strokeWidth="1" opacity="0.4"
                    clipPath="url(#taper-clip)"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(165, 97, 30)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 0.4,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <line x1="342" y1="100" x2="372" y2="148" stroke="#A5611E" strokeWidth="1" opacity="0.4"
                    clipPath="url(#taper-clip)"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(165, 97, 30)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 0.4,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <line x1="356" y1="100" x2="372" y2="155" stroke="#A5611E" strokeWidth="1" opacity="0.4"
                    clipPath="url(#taper-clip)"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(165, 97, 30)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 0.4,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />

                <line x1="395" y1="133" x2="395" y2="167" stroke="#A5611E" strokeWidth="1.2" opacity="0.5"
                    clipPath="url(#handle-clip)"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(165, 97, 30)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1.2px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 0.5,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <line x1="420" y1="133" x2="420" y2="167" stroke="#B8722A" strokeWidth="1" opacity="0.45"
                    clipPath="url(#handle-clip)"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(184, 114, 42)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 0.45,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <line x1="450" y1="133" x2="450" y2="167" stroke="#A5611E" strokeWidth="1.3" opacity="0.55"
                    clipPath="url(#handle-clip)"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(165, 97, 30)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1.3px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 0.55,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <line x1="480" y1="133" x2="480" y2="167" stroke="#A5611E" strokeWidth="1" opacity="0.4"
                    clipPath="url(#handle-clip)"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(165, 97, 30)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 0.4,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <line x1="510" y1="133" x2="510" y2="167" stroke="#B8722A" strokeWidth="1.2" opacity="0.5"
                    clipPath="url(#handle-clip)"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(184, 114, 42)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1.2px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 0.5,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <line x1="540" y1="133" x2="540" y2="167" stroke="#A5611E" strokeWidth="1" opacity="0.45"
                    clipPath="url(#handle-clip)"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(165, 97, 30)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 0.45,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <line x1="570" y1="133" x2="570" y2="167" stroke="#A5611E" strokeWidth="1.3" opacity="0.55"
                    clipPath="url(#handle-clip)"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(165, 97, 30)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1.3px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 0.55,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <line x1="596" y1="133" x2="596" y2="167" stroke="#B8722A" strokeWidth="1" opacity="0.4"
                    clipPath="url(#handle-clip)"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(184, 114, 42)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 0.4,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />

                <path d="M65,88 L312,88 L372,133 L618,133 L618,167 L372,167 L312,212 L65,212 Z" fill="none"
                    stroke="#7A4A1A" strokeWidth="2"
                    style={{
                        fill: 'none',
                        stroke: 'rgb(122, 74, 26)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '2px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 1,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />

                <rect x="56" y="84" width="15" height="132" rx="2" fill="#B0B0B0" stroke="#808080"
                    strokeWidth="1.5"
                    style={{
                        fill: 'rgb(176, 176, 176)',
                        stroke: 'rgb(128, 128, 128)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1.5px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 1,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <line x1="56" y1="108" x2="71" y2="108" stroke="#909090" strokeWidth="0.8"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(144, 144, 144)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '0.8px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 1,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <line x1="56" y1="130" x2="71" y2="130" stroke="#909090" strokeWidth="0.8"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(144, 144, 144)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '0.8px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 1,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <line x1="56" y1="150" x2="71" y2="150" stroke="#909090" strokeWidth="0.8"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(144, 144, 144)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '0.8px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 1,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <line x1="56" y1="170" x2="71" y2="170" stroke="#909090" strokeWidth="0.8"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(144, 144, 144)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '0.8px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 1,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <line x1="56" y1="192" x2="71" y2="192" stroke="#909090" strokeWidth="0.8"
                    style={{
                        fill: 'rgb(0, 0, 0)',
                        stroke: 'rgb(144, 144, 144)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '0.8px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 1,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />

                <circle cx="611" cy="150" r="9" fill="#C97D3A" stroke="#7A4A1A" strokeWidth="1.8"
                    style={{
                        fill: 'rgb(201, 125, 58)',
                        stroke: 'rgb(122, 74, 26)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1.8px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 1,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
                <circle cx="611" cy="150" r="4" fill="none" stroke="#7A4A1A" strokeWidth="1.5"
                    style={{
                        fill: 'none',
                        stroke: 'rgb(122, 74, 26)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1.5px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 1,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />

                <rect x="618" y="133" width="5" height="34" rx="2" fill="#A5611E" stroke="#7A4A1A"
                    strokeWidth="1"
                    style={{
                        fill: 'rgb(165, 97, 30)',
                        stroke: 'rgb(122, 74, 26)',
                        color: 'rgb(255, 255, 255)',
                        strokeWidth: '1px',
                        strokeLinecap: 'butt',
                        strokeLinejoin: 'miter',
                        opacity: 1,
                        fontFamily: '"Anthropic Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAnchor: 'start',
                        dominantBaseline: 'auto'
                    }} />
            </g>
        </svg>
    );
};

export default PizzaPeel;