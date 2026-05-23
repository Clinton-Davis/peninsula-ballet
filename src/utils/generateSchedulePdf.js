import { jsPDF } from "jspdf";
import { parseSchedule } from "./parseSchedule";

export function downloadSchedulePdf(
  scheduleText,
  filename = "Fish_Hoek_Class_Schedule.pdf"
) {
  const schedule = parseSchedule(scheduleText);
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 15;
  let y = 18;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(schedule.title, pageWidth / 2, y, { align: "center" });
  y += 10;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  schedule.notes.forEach((note) => {
    const lines = doc.splitTextToSize(note, pageWidth - margin * 2);
    doc.text(lines, pageWidth / 2, y, { align: "center" });
    y += lines.length * 4 + 2;
  });

  y += 6;
  const columnCount = schedule.days.length || 1;
  const columnWidth = (pageWidth - margin * 2) / columnCount;

  schedule.days.forEach((day, dayIndex) => {
    const x = margin + dayIndex * columnWidth;
    let columnY = y;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(day.name, x + columnWidth / 2, columnY, { align: "center" });
    columnY += 5;
    doc.line(x, columnY, x + columnWidth - 4, columnY);
    columnY += 5;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);

    day.classes.forEach((cls) => {
      const nameLines = doc.splitTextToSize(cls.name, columnWidth - 22);
      doc.text(nameLines, x, columnY);
      doc.text(cls.time, x + columnWidth - 6, columnY, { align: "right" });
      columnY += Math.max(nameLines.length * 4, 5) + 1;
    });
  });

  doc.save(filename);
}
