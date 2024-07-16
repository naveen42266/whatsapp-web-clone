import CloseIcon from '@mui/icons-material/Close';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import TextField from "@mui/material/TextField";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { WhatsappContext } from '@/useContext';
import { useContext, useRef, useState } from 'react';

const SearchScreen = () => {
    const { whatsapp, setWhatsapp } = useContext<any>(WhatsappContext);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [datePicker, setDatePicker] = useState<boolean>(false)
    const [selectedDate, setSelectedDate] = useState(null);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleDivClick = () => {
        if (inputRef?.current) {
            inputRef?.current?.focus();
        }
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };
    function handleUserDetails() {
        setWhatsapp({ ...whatsapp, userProfile: false, channelProfile: false, isSearch: false });
    }

    const handleDateChange = (date: any) => {
        setSelectedDate(date);
        setDatePicker(false); // Close the date picker after selecting a date
    };
    return (
        <div className="bg-white h-full">
            <div className="h-[7.5%] flex items-center gap-5 py-5 px-6 bg-[#f0f2f5] border-l border-slate-200">
                <CloseIcon fontSize="medium" className="text-[#54656f]" onClick={() => { handleUserDetails() }} />
                <div className="text-base capitalize">Search Messages</div>
            </div>
            <div className='h-[7%] flex justify-between items-center border-b border-slate-200 relative'>
                <CalendarTodayIcon fontSize="small" className="text-[#54656f] ml-2 mt-1" onClick={() => { setDatePicker(!datePicker) }} />
                <div className="bg-[#f0f2f5] rounded-md mx-3 flex items-center py-0.5 w-[93%]">
                    {isFocused ? <ArrowBackOutlinedIcon fontSize="small" className="mx-3 text-[#00a884]" onClick={() => { setIsFocused(!isFocused) }} /> : <SearchOutlinedIcon fontSize="small" className="mx-3 text-[#54656f]" onClick={() => { setIsFocused(!isFocused), handleDivClick() }} />}
                    <TextField id="standard-basic" autoComplete="off" className="searchField ml-5" placeholder={isFocused ? '' : 'Search'} variant="standard" fullWidth value={searchTerm} onChange={(evt) => { setSearchTerm(evt.target.value) }} onFocus={handleFocus} onBlur={handleBlur} inputRef={inputRef} />
                    {searchTerm ? <CloseIcon fontSize="small" className="mx-3 text-[#54656f]" onClick={() => setSearchTerm('')} /> : ''}
                </div>
                <div className='absolute -bottom-60 -left-40 z-20'>
                    {datePicker && <div className="flex justify-center mt-4">
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            inline
                            className='react-datepicker__header'
                        />
                    </div>}
                </div>
            </div>
            <div className="h-[85.5%] w-full overflow-y-scroll custom-scroll">
                <div className='text-center m-20'>Search for messages with {whatsapp?.tabSection?.user}.</div>
            </div>
        </div>
    )
}

export default SearchScreen;