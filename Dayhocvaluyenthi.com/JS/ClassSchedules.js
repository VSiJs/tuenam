function showSchedule() {
    const grade = document.getElementById('gradeSelect').value;
    const image = document.getElementById('scheduleImage');

    if (grade) {
        // Đường dẫn tương đối: từ HTML → ../FolderClassSchedules
        // Đặt tên tương đối của ảnh schedule-grade-(số từ 6-12)
        image.src = `../FolderClassSchedules/schedule-grade-${grade}.png`;
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
        image.src = '';
    }
}
// Khi show ảnh:
document.getElementById('scheduleImage').classList.add('active');
// Khi hide ảnh:
document.getElementById('scheduleImage').classList.remove('active');
