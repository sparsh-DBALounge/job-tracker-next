interface TableProps {
  headers: string[];
  children: React.ReactElement;
}

const Table = ({ headers, children }: TableProps) => {
  return (
    <table>
      <tr>
        {headers.map((header, i) => (
          <td key={i}>{header}</td>
        ))}
      </tr>

      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
