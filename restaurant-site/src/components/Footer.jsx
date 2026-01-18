export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Produced by Mathew Ritchie. All rights reserved.</p>
                <p>Images obtained from www.freepiks.com or AI generated.</p>
                <p>tel: +27 82 853 3541 </p>
                 <p>email: mathew.j.ritchie@gmail.com</p>
            </div>
        </footer>
    );
}