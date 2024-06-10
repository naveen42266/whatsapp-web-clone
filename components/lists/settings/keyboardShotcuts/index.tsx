import React from 'react';

const keyboardShortcuts = [
    { action: "Mark as unread", shortcut: "Ctrl + Alt + Shift + U" },
    { action: "Mute", shortcut: "Ctrl + Alt + Shift + M" },
    { action: "Archive chat", shortcut: "Ctrl + Alt + Shift + E" },
    { action: "Delete chat", shortcut: "Ctrl + Alt + Backspace" },
    { action: "Pin chat", shortcut: "Ctrl + Alt + Shift + P" },
    { action: "Search", shortcut: "Ctrl + Alt + /" },
    { action: "Search chat", shortcut: "Ctrl + Alt + Shift + F" },
    { action: "New chat", shortcut: "Ctrl + Alt + N" },
    { action: "Next chat", shortcut: "Ctrl + Alt + Tab" },
    { action: "Previous chat", shortcut: "Ctrl + Alt + Shift + Tab" },
    { action: "Close chat", shortcut: "Escape" },
    { action: "New group", shortcut: "Ctrl + Alt + Shift + N" },
    { action: "Profile and About", shortcut: "Ctrl + Alt + P" },
    { action: "Increase speed of selected voice message", shortcut: "Shift + ." },
    { action: "Decrease speed of selected voice message", shortcut: "Shift + ," },
    { action: "Settings", shortcut: "Ctrl + Alt + ," },
    { action: "Emoji panel", shortcut: "Ctrl + Alt + E" },
    { action: "GIF panel", shortcut: "Ctrl + Alt + G" },
    { action: "Sticker panel", shortcut: "Ctrl + Alt + S" },
    { action: "Extended search", shortcut: "Alt + K" },
    { action: "Lock App", shortcut: "Ctrl + Alt + L" },
];

interface KeyboardShortcutsProps{
    handleClose:()=>void;
}

const KeyboardShortcuts:React.FC<KeyboardShortcutsProps> = ({handleClose}) => {
    return (
        <div className='h-full w-full'>
            <div className='my-6 text-lg'>Keyboard Shortcuts</div>
            <div className='grid grid-cols-12 h-[80%] w-full overflow-y-scroll custom-scroll'>
                {keyboardShortcuts.map((shortcut, index) => (
                    <span key={index} className='col-span-12 sm:col-span-6 flex justify-between mr-4 my-3'>
                        <span className='text-[#3B4A54]'>{shortcut.action}</span>
                        <span className='flex gap-2'>{shortcut.shortcut.split('+').map((keys, i) => (
                            <span key={i} style={{backgroundColor:'rgba(59, 74, 84, 0.12)'}} className='py-1 px-3 rounded-lg border border-slate-400 text-[#111B21]'>{keys}</span>
                        ))}</span>
                    </span>
                ))}
            </div>
            <div className='flex float-end my-4'>
                <span className='text-white rounded-full bg-[#008069] py-2 px-5 cursor-pointer'onClick={handleClose}>Ok</span>
            </div>
        </div>
    );
};

export default KeyboardShortcuts;
