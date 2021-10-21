// Yêu cầu bài toán là khi click vào button thì hiện ngẫu nhiên một câu danh ngôn trong danh sách cho trước

let quotes = [
    {
        quote: 'Ăn mừng thành công cũng tốt, nhưng quan trọng hơn là bạn học được gì từ thất bại',
        author: 'Bill Gates'
    },
    {
        quote: 'Để trở thành người chiến thắng, bạn cần biết khi nào là đủ. Đôi khi trong cuộc sống, bạn phải từ bỏ cuộc chiến và chuyển sang mục tiêu mới mang lại hiệu quả hơn',
        author: 'Donald Trump'
    },
    {
        quote: 'Tầm nhìn có lẽ là sức mạnh lớn nhất của chúng ta. Nó giúp chúng ta nhận thức được sức mạnh và tính liên tục của tư duy qua nhiều thế kỷ, giúp chúng ta hướng đến tương lai và định hình những điều chưa biết',
        author: 'Lý Gia Thành'
    },
    {
        quote: 'Khi tôi lớn lên, tôi ít chú ý đến những điều người khác nói. Tôi chỉ quan tâm đến những gì họ làm',
        author: 'Andrew Carnegie'
    },
    {
        quote: 'Đừng tham gia cuộc chơi mà bạn không hiểu, cho dù bạn thấy những người khác kiếm được rất nhiều tiền từ nó',
        author: 'Tony Hsieh'
    },
    {
        quote: 'Không ngừng sáng tạo thì sẽ không sợ bị diệt vong',
        author: 'Henry Ford'
    },
    {
        quote: 'Nếu bạn không dám bị hiểu lầm hay chỉ trích, thì hãy làm ơn, đừng làm gì mới mẻ hay sáng tạo cả',
        author: 'Jeff Bezos'
    },
    {
        quote: 'Nếu muốn thành công, bạn phải dấn thân vào những con đường mới, chứ không phải đi du lịch trên lối mòn của những thành công đã được thừa nhận',
        author: 'John D Rockefeller'
    },
    {
        quote: 'Con người sẽ làm việc tốt hơn khi biết mục tiêu của mình là gì và lý do tại sao họ theo đuổi mục tiêu đó. Điều quan trọng là bạn phải tiến về phía trước để luôn hào hứng khi bắt đầu ngày mới mỗi buổi sáng và cảm thấy hạnh phúc khi được làm việc',
        author: 'Elon Musk'
    },
    {
        quote: 'Cho dù bạn đã tìm ra lĩnh vực nghề nghiệp yêu thích của mình hay vẫn đang tìm kiếm, thì niềm đam mê sẽ là ngọn lửa thúc đẩy công việc của bạn',
        author: 'Michael Dell'
    },

]

let quoteButton = document.querySelector('#quoteBtn');
let quoteElement = document.querySelector('#quote');
let quoteAuthorElement = document.querySelector('#quoteAuthor');

quoteButton.addEventListener('click', function () {
    quoteNumber = Math.floor(Math.random() * quotes.length)
    quoteElement.innerHTML = quotes[quoteNumber].quote
    quoteAuthorElement.innerHTML = quotes[quoteNumber].author
})



















